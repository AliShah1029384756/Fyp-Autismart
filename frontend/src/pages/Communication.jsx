import { useState } from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { useAuth } from '../context/AuthContext';
import { DEMO_CHAT } from '../data/demoData';

const Communication = () => {
  const { isDemoMode } = useAuth();
  const [message, setMessage] = useState('');
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [demoMessages, setDemoMessages] = useState(DEMO_CHAT);

  const experts = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'ABA Discussion',
      experience: '15 years',
      rating: 4.9,
      availability: 'Available',
      bio: 'Board-certified behavior analyst specializing in autism spectrum disorders',
    },
    {
      id: 2,
      name: 'Ms. Emily Chen',
      specialty: 'Speech Discussion',
      experience: '10 years',
      rating: 4.8,
      availability: 'Available',
      bio: 'Licensed speech-language pathologist with expertise in communication disorders',
    },
    {
      id: 3,
      name: 'Dr. Maria Garcia',
      specialty: 'Occupational Discussion',
      experience: '12 years',
      rating: 4.9,
      availability: 'Busy',
      bio: 'Pediatric occupational therapist focused on sensory integration',
    },
    {
      id: 4,
      name: 'Mr. David Lee',
      specialty: 'Special Education',
      experience: '8 years',
      rating: 4.7,
      availability: 'Available',
      bio: 'Special education teacher with focus on individualized learning plans',
    },
  ];

  const messages = [
    {
      id: 1,
      from: 'Dr. Sarah Johnson',
      preview: "Your child showed great progress in today's session...",
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      from: 'Ms. Emily Chen',
      preview: 'I recommend practicing the exercises we discussed...',
      time: '1 day ago',
      unread: false,
    },
    {
      id: 3,
      from: 'Dr. Maria Garcia',
      preview: "Let's schedule a follow-up session for next week...",
      time: '2 days ago',
      unread: false,
    },
  ];

  const sendDemoMessage = () => {
    if (!message.trim()) return;
    const next = [
      ...demoMessages,
      {
        id: demoMessages.length + 1,
        role: 'user',
        text: message.trim(),
        time: 'Just now',
      },
      {
        id: demoMessages.length + 2,
        role: 'assistant',
        text: 'Demo reply only — live AI is offline on this frontend tour. In production this would use the backend assistant.',
        time: 'Just now',
      },
    ];
    setDemoMessages(next);
    setMessage('');
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="mb-4">
        <h1 className="text-primary-custom">
          <i className="bi bi-chat-dots me-2"></i>
          Expert Communication
        </h1>
        <p className="text-muted">
          Connect with autism specialists and therapists for guidance and support
        </p>
        {isDemoMode && (
          <div className="alert alert-info py-2 small mb-0">
            Demo chat is pre-filled mock conversation. Messages are not saved or sent to a server.
          </div>
        )}
      </div>

      {isDemoMode && (
        <Card title="Demo guidance chat" className="mb-4">
          <div
            className="border rounded p-3 mb-3"
            style={{ maxHeight: '320px', overflowY: 'auto', background: '#f8f9fa' }}
          >
            {demoMessages.map((m) => (
              <div
                key={m.id}
                className={`mb-3 d-flex ${m.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div
                  className={`p-2 rounded ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white border'}`}
                  style={{ maxWidth: '80%' }}
                >
                  <div className="small opacity-75 mb-1">{m.role === 'user' ? 'You' : 'Assistant'} · {m.time}</div>
                  <div>{m.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type a demo message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendDemoMessage()}
            />
            <button type="button" className="btn btn-primary" onClick={sendDemoMessage}>
              Send (demo)
            </button>
          </div>
        </Card>
      )}

      <div className="row g-4">
        <div className="col-lg-8">
          <Card title="Our Expert Team">
            <div className="row g-4">
              {experts.map((expert) => (
                <div key={expert.id} className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex gap-3 mb-3">
                        <div
                          className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                          style={{ width: '80px', height: '80px' }}
                        >
                          <i className="bi bi-person-circle fs-1 text-muted"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-1">{expert.name}</h5>
                          <Badge variant="primary">{expert.specialty}</Badge>
                          <div className="mt-2">
                            <div className="text-warning mb-1">
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-half"></i>
                              <span className="text-muted ms-1">{expert.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted small mb-3">{expert.bio}</p>

                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <small className="text-muted d-block">Experience</small>
                          <span className="fw-medium">{expert.experience}</span>
                        </div>
                        <Badge variant={expert.availability === 'Available' ? 'success' : 'warning'}>
                          {expert.availability}
                        </Badge>
                      </div>

                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-primary btn-sm flex-grow-1"
                          onClick={() => setSelectedExpert(expert)}
                          type="button"
                        >
                          <i className="bi bi-chat-fill me-1"></i>
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {selectedExpert && (
            <Card title={`Message ${selectedExpert.name}`} className="mt-4">
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Enter message subject" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Type your message here..."></textarea>
              </div>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-primary" onClick={() => alert(isDemoMode ? 'Demo only — message not sent.' : 'Message UI only')}
                >
                  <i className="bi bi-send-fill me-2"></i>
                  Send Message
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedExpert(null)}>
                  Cancel
                </button>
              </div>
            </Card>
          )}
        </div>

        <div className="col-lg-4">
          <Card title="Recent Messages">
            <div className="d-grid gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-3 rounded ${msg.unread ? 'bg-primary-light border-primary' : 'bg-light'}`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="fw-medium">{msg.from}</div>
                    {msg.unread && <Badge variant="primary">New</Badge>}
                  </div>
                  <p className="text-muted small mb-2">{msg.preview}</p>
                  <small className="text-muted">
                    <i className="bi bi-clock me-1"></i>
                    {msg.time}
                  </small>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Communication;
