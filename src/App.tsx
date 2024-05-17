import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/dashboard"
import { Home } from "./pages/home"
import { Graph } from "./pages/Graph"
import { Table } from "./pages/Table"
import { Generated } from "./pages/generated"
import { Out } from "./pages/Out"
import { Delivered } from "./pages/delivered"
import { Returned } from "./pages/returned"
import { ProtectedRoute } from "./layouts/Protected"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ProtectedRoute isAuthenticated={window.localStorage.getItem('isLoggedIn')} redirect="/" />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<Table />} />
            <Route path="/dashboard/graph" element={<Graph />} />
            <Route path="/dashboard/waybill-generated" element={<Generated />} />
            <Route path="/dashboard/waybill-out" element={<Out />} />
            <Route path="/dashboard/waybill-delivered" element={<Delivered />} />
            <Route path="/dashboard/cancelled-waybill" element={<Returned />} />
          </Route>
        </Route>


      </Routes>
    </Router>

  )
}

export default App
