import React from 'react'
import classes from "../FirstPage/First.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Solpanel from "../Img/Solpanel.png";
import Monopanel from "../Img/Monopanel.png";
import Polypanel from "../Img/Polypanel.png";
import Thinpanel from "../Img/Thinpanel.png";
import Bifapanel from "../Img/Bifapanel.png";
import Shinglespanel from "../Img/Shinglespanel.png";
import BuildIntepanel from "../Img/BuildIntepanel.png";
import Solarinventpanel from "../Img/Solarinventpanel.png";
import Inventerpanel from "../Img/Inventerpanel.png";
import Micropanel from "../Img/Micropanel.png";

import Blelogo from "../Logo/Bluelogo.png";
import Orngelogo from "../Logo/Orangelogo.png";


export default function Thirdpage() {
  return (
    <div className={classes.outercontainer}>
      <div>
        {" "}
        <Sidebar />
      </div>
      <div className={classes.content}>
        <div>
          <h1>Exploring Different Types of Solar Panels </h1>
        </div>

        <div>
            <p>If you're interested in using solar energy, there are several different types of solar panels to choose from. Each type has its own special features and advantages. Let's explore the most commonly used solar panels in the industry today.</p>
        </div>

        <div>
          <h2>
            How to decide which Roof Type is Suitable for Solar Panel
            Installation?
          </h2>
        </div>

        <div className={classes.timgglogo}>
        <img src={Orngelogo} alt="" className={classes.tologo} />
        <img src={Solpanel} className={classes.timg1} alt="" />
        <img src={Blelogo} alt="" className={classes.tblogo} />
        </div>

        <div>
          <h3>Monocrystalline Solar Panels</h3>
          <p>
          Monocrystalline solar panels are created using a solitary crystal structure, usually made of silicon. These panels are recognized for their impressive efficiency and stylish black look. Monocrystalline panels work effectively in direct sunlight and are a favored option for both homes and businesses.
          </p>
        </div>

        <div className={classes.timglogo}>
          <img src={Orngelogo} alt="" className={classes.ologo} />
          <img src={Monopanel} alt="" className={classes.timg} />
          <img src={Blelogo} alt="" className={classes.blogo} />

          <img src="" alt=""  />
        </div>


        <div>
          <h3>Polycrystalline Solar Panels</h3>
          <p>
          Polycrystalline solar panels are created by combining multiple pieces of silicon, which gives them a textured, blue-speckled look. Although they are not as efficient as monocrystalline panels, they provide a cost-effective solution for solar installations. Polycrystalline panels are versatile and work effectively in different weather conditions.
          </p>
        </div>

        <div className={classes.timglogo}>
        <img src={Orngelogo} alt="" className={classes.ologo} />
          <img src={Polypanel} alt="" className={classes.timg} />
          <img src={Blelogo} alt="" className={classes.blogo} />
        </div>


        
        <div>
          <h3>Thin-Film Solar Panels</h3>
          <p>
          Thin-film solar panels are light and flexible, making them perfect for a variety of uses. They are created by placing a thin layer of semiconductor material onto a base. While thin-film panels are not as efficient as traditional ones, they can still be used in situations where regular panels are not suitable, such as curved surfaces or portable solar devices.
          </p>
        </div>

        <div className={classes.timglogo}>
        <img src={Orngelogo} alt="" className={classes.ologo} />
          <img src={Thinpanel} alt="" className={classes.timg} />
          <img src={Blelogo} alt="" className={classes.blogo} />
        </div>


        <div>
          <h3>Bifacial Solar Panels</h3>
          <p>
          Bifacial solar panels are designed to capture sunlight from both sides, which helps to maximize their energy generation. These panels can harness direct sunlight from above and also utilize the reflected light from the ground, making them more efficient overall. Typically, bifacial panels are installed on elevated structures or in areas where there is a high level of reflectivity.
          </p>
        </div>

        <div className={classes.timglogo}>
        <img src={Orngelogo} alt="" className={classes.ologo} />
          <img src={Bifapanel} alt="" className={classes.timg} />
          <img src={Blelogo} alt="" className={classes.blogo} />
        </div>


        <div>
          <h3>Solar Shingles</h3>
          <p>
          Solar shingles, or solar roof tiles, seamlessly blend in with regular roofing materials, offering both protection for the roof and the ability to generate electricity. They are a visually appealing choice for homeowners who prioritize both functionality and design.
           </p>
        </div>

        <div className={classes.timglogo}>
        <img src={Orngelogo} alt="" className={classes.ologo} />
          <img src={Shinglespanel} alt="" className={classes.timg} />
          <img src={Blelogo} alt="" className={classes.blogo} />
        </div>


        <div>
          <h3>Building-Integrated Photovoltaics (BIPV)</h3>
          <p>
          BIPV stands for Building Integrated Photovoltaics, which means incorporating solar panels into building materials like windows, facades, or walls. Instead of regular building components, these panels serve as a renewable energy source. BIPV combines functionality and sustainable design, enabling structures to produce electricity without compromising their architectural integrity.
           </p>

           <p>Knowing the various kinds of solar panels allows people and companies to make well-informed choices when switching to solar power. Whether you prefer the excellent efficiency of monocrystalline panels, the affordability of polycrystalline panels, or the flexibility of thin-film panels, there's a solar option for everyone. Discover the potential and embrace the benefits of solar energy.</p>
        </div>

        <div className={classes.timglogo}>
        <img src={Orngelogo} alt="" className={classes.ologo} />
          <img src={BuildIntepanel} alt="" className={classes.timg} />
          <img src={Blelogo} alt="" className={classes.blogo} />
        </div>



        <div>
          <h3>Solar Inverters: Powering Your Solar PV System</h3>
          <p>
          Solar inverters are essential for capturing solar energy and transforming it into usable electricity. They serve as the core component of a solar photovoltaic (PV) system, guaranteeing efficient operation and maximum power generation. Now, let's delve into the main features of solar inverters and their importance in the realm of solar energy. </p>
        </div>

      
        <div className={classes.timglogo}>
        <img src={Orngelogo} alt="" className={classes.ologo} />
          <img src={Solarinventpanel} alt="" className={classes.timg} />
          <img src={Blelogo} alt="" className={classes.blogo} />
        </div>

        <div>
          <h3>Role of Solar Inverters in a Solar PV System:</h3>
          <p>
          Solar inverters play a crucial role in a solar PV system by converting the DC electricity generated by solar panels into AC electricity that can be used to power appliances and feed into the electrical grid. They act as the middleman between the solar panels and electrical devices, ensuring smooth compatibility and efficient energy transfer. </p>
        </div>


        <div>
          <h3>Types of Solar Inverters:</h3>
          <p>
          There are various kinds of solar inverters to choose from, each with their own set of distinct advantages and characteristics. The three primary types are string inverters, microinverters, and power optimizers.
           </p>
        </div>

         <div>
          <h3>String Inverters: </h3>
          <p>
          String inverters are frequently utilized in solar photovoltaic (PV) systems. They are linked to a group of solar panels, called a string, and transform the collective DC electricity into AC electricity. String inverters are affordable and well-suited for installations with consistent panel alignment and limited shading.
           </p>
        </div>


        <div className={classes.timglogo}>
        <img src={Orngelogo} alt="" className={classes.ologo} />
          <img src={Inventerpanel} alt="" className={classes.timg} />
          <img src={Blelogo} alt="" className={classes.blogo} />
        </div>


        <div>
          <h3>Microinverters </h3>
          <p>
          Each solar panel is equipped with microinverters, which enable independent power conversion. This design boosts system performance, particularly in installations with shading or panel mismatch. Additionally, microinverters provide advanced monitoring features, allowing for tracking of individual panel performance.
           </p>
        </div>


        <div className={classes.timglogo}>
        <img src={Orngelogo} alt="" className={classes.ologo} />
          <img src={Micropanel} alt="" className={classes.timg} />
          <img src={Blelogo} alt="" className={classes.blogo} />
        </div>

        <div>
          <h3>Power Optimizers </h3>
          <p>
          Power optimizers are used alongside string inverters to enhance the performance of solar panels. These optimizers are connected to each panel and work by maximizing the power output, ensuring that the panels generate the most energy possible, even if they are shaded or positioned unevenly. By providing monitoring at the panel level, power optimizers improve the overall efficiency and performance of the solar system.
           </p>
        </div>


        <div>
          <h3> Monitoring and Troubleshooting Solar Inverters:</h3>
          <p>
          Monitoring solar inverters regularly is important to ensure the best performance of the system. Many inverters have monitoring systems built-in, which give users real-time information on energy production. This allows users to keep track of their system's performance and quickly address any problems. Troubleshooting techniques can be used to identify and fix any faults or malfunctions, ensuring that the solar PV system operates smoothly.
           </p>
        </div>

        <div>
          <h3>Inverter Efficiency and Power Output: </h3>
          <p>
          When selecting a solar inverter, it's important to consider its efficiency. Inverters with higher efficiency can convert a larger portion of DC electricity into usable AC electricity, which leads to improved overall system efficiency. The efficiency of the inverter directly affects the power output of the solar PV system and has an impact on the energy yield and financial returns.
           </p>
        </div>

        </div>
      </div>

  )
}
