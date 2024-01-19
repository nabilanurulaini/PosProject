import { NavLink } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import appLogo from "../assets/img/burger.png";

function Nav() {
  return (
    <Navbar fluid rounded className="border-b text-xl" style={{
      fontSize: "1.25rem",
    }}>
      <Navbar.Brand href="/" className="text-yellow-400 hover:text-yellow-500">
        <img src={appLogo} className="mr-3 h-6 sm:h-9" alt="FoodPedia" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FoodPedia
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Nabila Nurul Aini</span>
            <span className="block truncate text-sm font-medium">
              nabilaaini@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item href="/order-history">Order History</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className={""}>
      <NavLink 
  to="/"
  className={({ isActive }) =>
    `${
      isActive ? "text-yellow-500" : "text-yellow-400"
    } hover:text-yellow-500 text-base` // Menambahkan properti fontSize: "16px"
  }
>
  Home
</NavLink>

        
<NavLink 
  to="/order-history"
  className={({ isActive }) =>
    `${
      isActive ? "text-yellow-500" : "text-yellow-400"
    } hover:text-yellow-500 text-base` // Menambahkan properti fontSize: "16px"
  }
>
  Order History
</NavLink>

<NavLink 
  to="/about"
  className={({ isActive }) =>
    `${
      isActive ? "text-yellow-500" : "text-yellow-400"
    } hover:text-yellow-500 text-base` // Menambahkan properti fontSize: "16px"
  }
>
  About
</NavLink>

      </Navbar.Collapse>
    </Navbar>
  );
}
export default Nav;
