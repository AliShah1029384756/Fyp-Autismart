import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { DEMO_ASSESSMENTS, DEMO_CHILD } from '../data/demoData';
import { useAuth } from '../context/AuthContext';

const DemoChildOverview = () => {
  const { isDemoMode } = useAuth();

  return (
    <div className="container mt-4 mb-5">
      <div className="mb-4">
        <h1 className="text-primary-custom">
          <i className="bi bi-person-badge me-2"></i>
          Demo child & assessments
        </h1>
        <p className="text-muted mb-2">
          Sample profile used in the frontend tour. Not stored on a server.
        </p>
        {isDemoMode && (
          <div className="alert alert-info py-2 small">Demo mode — mock data only.</div>
        )}
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <Card title="Demo child">
            <h4 className="mb-2">{DEMO_CHILD.name}</h4>
            <p className="mb-1">
              <strong>Age:</strong> {DEMO_CHILD.age}
            </p>
            <p className="mb-1">
              <strong>Gender:</strong> {DEMO_CHILD.gender}
            </p>
            <p className="mb-1">
              <strong>DOB:</strong> {DEMO_CHILD.dateOfBirth}
            </p>
            <p className="mb-2">
              <strong>Diagnosis:</strong> {DEMO_CHILD.diagnosis}
            </p>
            <p className="text-muted small">{DEMO_CHILD.notes}</p>
            <div className="d-grid gap-2 mt-3">
              <Link to="/communication" className="btn btn-outline-primary btn-sm">
                Open demo chat
              </Link>
              <Link to="/games" className="btn btn-outline-secondary btn-sm">
                Therapy games
              </Link>
            </div>
          </Card>
        </div>

        <div className="col-md-8">
          <Card title="Demo assessments">
            <div className="d-grid gap-3">
              {DEMO_ASSESSMENTS.map((a) => (
                <div key={a.id} className="border rounded p-3">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div>
                      <h5 className="mb-1">{a.title}</h5>
                      <small className="text-muted">{a.date}</small>
                    </div>
                    <div className="text-end">
                      <div className="fw-bold fs-5">{a.score}</div>
                      <Badge variant="primary">{a.level}</Badge>
                    </div>
                  </div>
                  <p className="mb-0 mt-2 text-muted small">{a.summary}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DemoChildOverview;
