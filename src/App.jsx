import { useState } from "react";

function App() {
  const [page, setPage] = useState("login");

  // LOGIN PAGE
  const Login = () => {
    return (
      <div className="box login-box">
        <h1>Student Login</h1>

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button onClick={() => setPage("dashboard")}>
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <span
            className="link"
            onClick={() => setPage("signup")}
          >
            Signup
          </span>
        </p>
      </div>
    );
  };

  // SIGNUP PAGE
  const Signup = () => {
    return (
      <div className="box signup-box">
        <h1>Student Registration</h1>

        <input type="text" placeholder="Enter Full Name" />

        <input type="text" placeholder="Roll Number" />

        <input type="email" placeholder="Email Address" />

        <input type="text" placeholder="Course" />

        <input type="text" placeholder="Section" />

        <input type="password" placeholder="Create Password" />

        <button onClick={() => setPage("login")}>
          Register
        </button>

        <p>
          Already have an account?{" "}
          <span
            className="link"
            onClick={() => setPage("login")}
          >
            Login
          </span>
        </p>
      </div>
    );
  };

  // DASHBOARD PAGE
  const Dashboard = () => {
    return (
      <div className="box dashboard-box">
        <h1>Student Dashboard</h1>

        <h2>Welcome Bhavya🎓</h2>

        <p>Course : BCA</p>

        <p>Section : D</p>

        <button>View Profile</button>

        <button>Attendance</button>

        <button onClick={() => setPage("login")}>
          Logout
        </button>
      </div>
    );
  };

  return (
    <div className="container">

      {page === "login" && <Login />}

      {page === "signup" && <Signup />}

      {page === "dashboard" && <Dashboard />}

    </div>
  );
}

export default App;