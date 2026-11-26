import PageLayout from '../../components/PageLayout.jsx';
import { useGallery } from '../../context/GalleryContext.jsx';

export default function ViewingRequestHistory() {
  const { viewingRequests } = useGallery();
  const user = localStorage.getItem('currentUser') || 'Gallery visitor';
  const mine = viewingRequests.filter(r => (r.userId || r.user) === user);
  return <PageLayout>
    <div className="page-title"><p className="eyebrow">YOUR ARTORA ACCOUNT</p><h1>My viewing request history</h1><p>Check your previous requests and the artist’s decision whenever you return.</p></div>
    <section className="admin-form"><h2>Past and current requests</h2>
      {mine.length ? mine.slice().reverse().map(r => <article key={r.id} style={{borderBottom:'1px solid #ddd',padding:'16px 0'}}>
        <h3>{r.artwork}</h3><p>Artist: {r.artist}</p><p>Requested: {r.date} at {r.time}</p><p>Decision: <b>{r.status}</b></p>
        {r.status === 'Requested' && <p>The artist has not responded yet.</p>}
        {r.status === 'Accepted' && <p>Your viewing request has been accepted. Please contact the artist to confirm any final details.</p>}
        {r.status === 'Declined' && <p>The artist declined this time request. You can submit another request with a different date.</p>}
      </article>) : <p>You have not made any viewing requests yet.</p>}
    </section>
  </PageLayout>;
}
