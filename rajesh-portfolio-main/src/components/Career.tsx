import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Leadership
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>G. H. Raisoni College</h5>
              </div>
              <h3>2024-28</h3>
            </div>
            <p>
              Computer Engineering. Relevant Coursework: Data Structures & Algorithms,
              Object Oriented Programming, System Design (Basics). CGPA: 9.36.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Member</h4>
                <h5>CSI Student Chapter</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Coordinated DSA quiz competition for 100+ participants and encouraged
              problem-solving engagement on campus. Active participant in coding challenges.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Active Participant</h4>
                <h5>Coding Community</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Solved 60+ problems on HackerRank and LeetCode. HackerRank Problem
              Solving (Basic) Certified. Built multiple projects using Java.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
