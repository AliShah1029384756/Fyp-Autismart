import { createContext, useContext, useState, useEffect } from 'react';
import { authService, childService } from '../services';
import { DEMO_CHILD, demoUserForRole } from '../data/demoData';

const AuthContext = createContext(null);
const DEMO_KEY = 'autismart_demo_mode';
const DEMO_ROLE_KEY = 'autismart_demo_role';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [preloadedData, setPreloadedData] = useState(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  // Auto logout after 3 minutes of inactivity (skip in demo mode)
  useEffect(() => {
    let logoutTimer;
    let activityTimer;

    const SESSION_TIMEOUT = 3 * 60 * 1000;

    const resetTimer = () => {
      if (logoutTimer) clearTimeout(logoutTimer);
      if (activityTimer) clearTimeout(activityTimer);

      if (user && !isDemoMode) {
        logoutTimer = setTimeout(() => {
          logout();
          setSessionExpired(true);
          setTimeout(() => {
            window.location.href = '/login';
          }, 100);
        }, SESSION_TIMEOUT);
      }
    };

    const handleActivity = () => {
      if (activityTimer) clearTimeout(activityTimer);
      activityTimer = setTimeout(() => {
        resetTimer();
      }, 1000);
    };

    if (user && !isDemoMode) {
      resetTimer();
      window.addEventListener('mousedown', handleActivity);
      window.addEventListener('keydown', handleActivity);
      window.addEventListener('scroll', handleActivity);
      window.addEventListener('touchstart', handleActivity);
    }

    return () => {
      if (logoutTimer) clearTimeout(logoutTimer);
      if (activityTimer) clearTimeout(activityTimer);
      window.removeEventListener('mousedown', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };
  }, [user, isDemoMode]);

  useEffect(() => {
    const demoFlag = localStorage.getItem(DEMO_KEY) === '1';
    const demoRole = localStorage.getItem(DEMO_ROLE_KEY);

    if (demoFlag && demoRole) {
      const demoUser = demoUserForRole(demoRole);
      setUser(demoUser);
      setIsDemoMode(true);
      setPreloadedData({
        children: demoRole === 'caregiver' || demoRole === 'expert' ? [DEMO_CHILD] : [],
      });
      setLoading(false);
      return;
    }

    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      preloadUserData();
    } else {
      setLoading(false);
    }
  }, []);

  const preloadUserData = async () => {
    try {
      const [childrenResponse] = await Promise.all([
        childService.getChildren().catch(() => ({ data: [] })),
      ]);

      setPreloadedData({
        children: childrenResponse.data || [],
      });
    } catch (err) {
      console.error('Error preloading data:', err);
    } finally {
      setLoading(false);
    }
  };

  const startDemoTour = (role = 'guest') => {
    const allowed = ['guest', 'caregiver', 'expert'];
    const safeRole = allowed.includes(role) ? role : 'guest';
    const demoUser = demoUserForRole(safeRole);

    localStorage.setItem(DEMO_KEY, '1');
    localStorage.setItem(DEMO_ROLE_KEY, safeRole);
    // Clear real auth tokens so API is not used by mistake
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setIsDemoMode(true);
    setUser(demoUser);
    setPreloadedData({
      children: safeRole === 'caregiver' || safeRole === 'expert' ? [DEMO_CHILD] : [],
    });
    setLoading(false);

    return demoUser;
  };

  const login = async (credentials) => {
    let loginData;
    if (typeof credentials === 'string') {
      const password = arguments[1];
      loginData = { email: credentials, password };
    } else {
      loginData = credentials;
    }

    localStorage.removeItem(DEMO_KEY);
    localStorage.removeItem(DEMO_ROLE_KEY);
    setIsDemoMode(false);

    const response = await authService.login(loginData);
    setUser(response.data.user);
    await preloadUserData();
    return response;
  };

  const register = async (userData) => {
    const response = await authService.register(userData);
    return response;
  };

  const verifyOtp = async (verifyData) => {
    let otpData;
    if (typeof verifyData === 'string') {
      const otp = arguments[1];
      otpData = { email: verifyData, otp };
    } else {
      otpData = verifyData;
    }

    const response = await authService.verifyOtp(otpData);
    setUser(response.data.user);
    await preloadUserData();
    return response;
  };

  const logout = () => {
    authService.logout();
    localStorage.removeItem(DEMO_KEY);
    localStorage.removeItem(DEMO_ROLE_KEY);
    setUser(null);
    setPreloadedData(null);
    setIsDemoMode(false);
  };

  const value = {
    user,
    loading,
    login,
    register,
    verifyOtp,
    logout,
    startDemoTour,
    isDemoMode,
    isAuthenticated: !!user,
    sessionExpired,
    setSessionExpired,
    preloadedData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
