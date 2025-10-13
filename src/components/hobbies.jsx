
const Hobbies = () => {
  return (
  <div className="info-box">
    <h1>Hobbies</h1>
    <div className="hobbies-container">
      <div className="hobby-card">
        <span className="hobby-icon"><i className="fas fa-microchip"></i></span>
        <h3>Tinkering with Gadgets</h3>
        <p>I love experimenting with electronic devices and exploring how they work.</p>
      </div>

      <div className="hobby-card">
        <span className="hobby-icon"><i className="fas fa-basketball-ball"></i></span>
        <h3>Basketball</h3>
        <p>Playing basketball helps me stay active, competitive, and team-oriented.</p>
      </div>

      <div className="hobby-card">
        <span className="hobby-icon"><i className="fas fa-futbol"></i></span>
        <h3>Football</h3>
        <p>I enjoy playing football as it sharpens my focus and builds teamwork.</p>
      </div>

      <div className="hobby-card">
        <span className="hobby-icon"><i className="fas fa-rocket"></i></span>
        <h3>Exploring Tech</h3>
        <p>I’m passionate about futuristic technology ideas like AI, IoT, and AR.</p>
      </div>
    </div>
  </div>
  )
}

export default Hobbies
