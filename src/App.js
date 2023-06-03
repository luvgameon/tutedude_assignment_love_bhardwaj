import Header from './Components/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReferandEarn from './Pages/ReferandEarn';
import FriendsReferred from './Pages/FriendsReferred';

function App() {
  return (
   <>
  <BrowserRouter>
			<Header />
			<div style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Routes>
					<Route path='/' element={<ReferandEarn />} />
					<Route path='/friendsreferred' element={<FriendsReferred />} />

				
		
				</Routes>
			</div>
		</BrowserRouter>
   </>
  );
}

export default App;
