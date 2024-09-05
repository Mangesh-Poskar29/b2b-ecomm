import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';
import { FaChartLine, FaPlusCircle, FaBoxOpen, FaCog, FaSignOutAlt } from 'react-icons/fa';
import hammer from '../../assets/hammer.jpg';
import drill from '../../assets/drill.jpg';
import tape from '../../assets/tape.jpg';
import './SellerDashboard.css';
import { useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const [activeSection, setActiveSection] = useState("statistics");
  const navigate = useNavigate(); 

  const topSellingProducts = [
    {
      id: 1,
      name: "Hammer",
      image: hammer,
      price: "₹300",
      quantity: 50,
      category: "Construction",
    },
    {
      id: 2,
      name: "Drill",
      image: drill,
      price: "₹1500",
      quantity: 30,
      category: "Machinery",
    },
    {
      id: 3,
      name: "Tape",
      image: tape,
      price: "₹100",
      quantity: 100,
      category: "Construction",
    },
  ];

  const salesSeries = [
    {
      name: "Average Sales",
      data: [45000, 55000, 60000, 70000, 80000, 90000, 100000]
    }
  ];

  const salesOptions = {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#77B6EA'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Average Sales in Rupees',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Sales (₹)'
      },
      min: 40000,
      max: 120000
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };

  const productSeries = [50, 30, 100];
  const productOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: topSellingProducts.map(product => product.name),
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const customerSeries = [
    {
      name: 'New Customers',
      data: [120, 150, 200, 180, 220]
    },
    {
      name: 'Returning Customers',
      data: [80, 90, 100, 110, 130]
    }
  ];

  const customerOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    yaxis: {
      title: {
        text: 'Number of Customers'
      },
    },
    fill: {
      opacity: 1
    },
    colors: ['#00E396', '#009688'],
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    }
  };

  const handleLogout = () => {
    navigate('/SignIn'); 
  };

  const renderSection = () => {
    switch (activeSection) {
      case "statistics":
        return (
          <div className="SEcard">
            <h2>Sales Overview</h2>
            <div className="SEcharts">
              <div className="SEchart">
                <ReactApexChart options={salesOptions} series={salesSeries} type="line" height={350} />
              </div>
              <div className="SEchart">
                <ReactApexChart options={productOptions} series={productSeries} type="pie" width={380} />
              </div>
              <div className="SEchart">
                <ReactApexChart options={customerOptions} series={customerSeries} type="bar" height={350} />
              </div>
            </div>
          </div>
        );
      case "addProduct":
        return (
          <form className="SEproductForm">
            <h2 className="SEformTitle">Add New Product</h2>
            <div className="SEformGroup">
              <label htmlFor="productName" className="SElabel">Product Name</label>
              <input type="text" id="productName" className="SEinput" required />
            </div>
            <div className="SEformGroup">
              <label htmlFor="category" className="SElabel">Category</label>
              <select id="category" className="SEinput" required>
                <option value="">Select Category</option>
                <option value="construction">Construction</option>
                <option value="cloth">Cloth</option>
                <option value="machinery">Machinery</option>
                <option value="pharmacy">Pharmacy</option>
              </select>
            </div>
            <div className="SEformGroup">
              <label htmlFor="productImage" className="SElabel">Product Image</label>
              <input type="file" id="productImage" className="SEinput" accept="image/*" required />
            </div>
            <div className="SEformGroup">
              <label htmlFor="description" className="SElabel">Description</label>
              <textarea id="description" className="SEinput" rows="4" required></textarea>
            </div>
            <div className="SEformGroup">
              <label htmlFor="minQuantity" className="SElabel">Minimum Quantity to Order</label>
              <input type="number" id="minQuantity" className="SEinput" min="1" required />
            </div>
            <div className="SEformGroup">
              <label htmlFor="quantity" className="SElabel">Quantity</label>
              <input type="number" id="quantity" className="SEinput" min="1" required />
            </div>
            <button type="submit" className="SEsubmitButton">Add Product</button>
          </form>
        );
      case "checkStock":
        return (
          <div className="SEstockSection">
            <h2 className="SEsectionTitle">Check Stock</h2>
            <div className="SEproductList">
              {topSellingProducts.map((product) => (
                <div key={product.id} className="SEproductCard">
                  <img src={product.image} alt={product.name} className="SEproductImage" />
                  <h3 className="SEproductName">{product.name}</h3>
                  <p className="SEproductCategory">{product.category}</p>
                  <p className="SEproductPrice">{product.price}</p>
                  <p className="SEproductQuantity">Quantity: {product.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "settings":
        return (
          <form className="SEsettingsForm">
            <h2 className="SEformTitle">Settings</h2>
            <div className="SEformGroup">
              <label htmlFor="shopName" className="SElabel">Shop Name</label>
              <input type="text" id="shopName" className="SEinput" required />
            </div>
            <div className="SEformGroup">
              <label htmlFor="shopCategory" className="SElabel">Category</label>
              <input type="text" id="shopCategory" className="SEinput" required />
            </div>
            <div className="SEformGroup">
              <label htmlFor="shopMobile" className="SElabel">Mobile Number</label>
              <input type="tel" id="shopMobile" className="SEinput" pattern="[0-9]{10}" required />
            </div>
            <button type="submit" className="SEsubmitButton">Save Changes</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="SEdashboardWrapper">
      <aside className="SEsidebar">
        <h2 className="SEsidebarTitle">Welcome</h2>
        <ul className="SEsidebarMenu">
          <li
            className={activeSection === "statistics" ? "active" : ""}
            onClick={() => setActiveSection("statistics")}
          >
            <FaChartLine className="SEsidebarIcon" />
            Statistics
          </li>
          <li
            className={activeSection === "addProduct" ? "active" : ""}
            onClick={() => setActiveSection("addProduct")}
          >
            <FaPlusCircle className="SEsidebarIcon" />
            Add Product
          </li>
          <li
            className={activeSection === "checkStock" ? "active" : ""}
            onClick={() => setActiveSection("checkStock")}
          >
            <FaBoxOpen className="SEsidebarIcon" />
            Check Stock
          </li>
          <li
            className={activeSection === "settings" ? "active" : ""}
            onClick={() => setActiveSection("settings")}
          >
            <FaCog className="SEsidebarIcon" />
            Settings
          </li>
          <li onClick={handleLogout}>
            <FaSignOutAlt className="SEsidebarIcon" />
            Logout
          </li>
        </ul>
      </aside>
      <main className="SEdashboardContent">
        <h1 className="SEdashboardTitle">Seller Dashboard</h1>
        {renderSection()}
      </main>
    </div>
  );
};

export default SellerDashboard;
