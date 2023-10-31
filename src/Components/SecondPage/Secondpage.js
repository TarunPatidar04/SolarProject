import React from "react";
import classes from "../FirstPage/First.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Spanel from "../Img/Spanel.png";
import Rangle from "../Img/Rangle.png";
import Rmaterial from "../Img/Rmaterial.png";
import Rage from "../Img/Rage.png";
import Rpitch from "../Img/Rpitch.png";
import Rshade from "../Img/Rshade.png";
import Rintegrity from "../Img/Rintegrity.png";
import Bluelogo from "../Logo/Bluelogo.png";
import Orangelogo from "../Logo/Orangelogo.png";

export default function Secondpage() {
  return (
    <div className={classes.outercontainer}>
      <div>
        {" "}
        <Sidebar />
      </div>
      <div className={classes.content}>
        <div>
          <h1>Solar Panel Installation</h1>
        </div>

        <div>
          <h3>Roof Types Suitable for Solar Panel Installation</h3>

          <p>
            Discover the best roofs for installing solar panels, such as pitched
            roofs, flat roofs, and metal roofs. Gain insights into the factors
            to consider when choosing roof materials and their compatibility
            with solar panel mounting.
          </p>
        </div>

        <div>
          <h2>
            How to decide which Roof Type is Suitable for Solar Panel
            Installation?
          </h2>
        </div>

        <div className={classes.imglog}>
        <img src={Orangelogo} className={classes.orlogo} alt="" />

          <img src={Spanel} alt="" className={classes.simg1} />
          <img src={Bluelogo} className={classes.bllogo} alt="" />


        </div>

        <div>
          <h3>Roof Orientation and Angle:</h3>
          <p>
            South-facing roofs generally receive the most sunlight throughout
            the day and are considered ideal for solar panel installation.
          </p>

          <p>
            East and west-facing roofs can also be suitable, although they may
            produce slightly less energy compared to south-facing roofs.
          </p>

          <p>
            North-facing roofs are generally less desirable due to limited
            sunlight exposure.
          </p>
        </div>

        <div className={classes.imglogo}>
          <img src={Orangelogo} className={classes.orglogo} alt="" />
          <img src={Rangle} alt="" className={classes.simg2} />
          <img src={Bluelogo} className={classes.blulogo} alt="" />

        </div>

        <div>
          <h3>Roof Material:</h3>
          <ul>
            <li>
              Different roofing materials have varying degrees of suitability
              for solar panel installation.
            </li>
            <li>
              A sphalt shingles, metal roofs, and concrete tiles are commonly
              used and can easily accommodate solar panels.
            </li>
            <li>
              Clay or slate tiles may require additional precautions during
              installation to ensure proper sealing and stability.
            </li>
          </ul>
        </div>

        <div className={classes.imglogo}>
          <img src={Orangelogo} className={classes.orglogo} alt="" />
          <img src={Rmaterial} alt="" className={classes.simg3} />
          <img src={Bluelogo} className={classes.blulogo} alt="" />

        </div>

        <div>
          <h3>Roof Age and Condition:</h3>
          <ul>
            <li>
              Consider the age and condition of your roof before installing
              solar panels.
            </li>
            <li>
              If your roof is nearing the end of its lifespan, it may be
              advisable to replace it before installing solar panels to avoid
              future complications.
            </li>
          </ul>
        </div>

        <div className={classes.imglogo}>
          <img src={Orangelogo} className={classes.orglogo} alt="" />
          <img src={Rage} alt="" className={classes.simg4} />
          <img src={Bluelogo} className={classes.blulogo} alt="" />

        </div>

        <div>
          <h3>Roof Shape and Pitch:</h3>
          <ul>
            <li>
              The shape and pitch of your roof can impact solar panel
              installation.
            </li>
            <li>
              A roof with a simple, unobstructed shape and a moderate pitch is
              generally easier to work with.
            </li>
            <li>
              Steeply pitched roofs may require additional mounting equipment
              and careful installation techniques.
            </li>
          </ul>
        </div>

        <div className={classes.imglogo}>
        <img src={Orangelogo} className={classes.orglogo} alt="" />
          <img src={Rpitch} alt="" className={classes.simg5} />
          <img src={Bluelogo} className={classes.blulogo} alt="" />

        </div>

        <div>
          <h3>Shade and Obstructions:</h3>
          <ul>
            <li>
              Assess the amount of shade your roof receives throughout the day.
            </li>
            <li>
              Trees, neighboring buildings, or other obstructions can
              significantly reduce solar panel efficiency.
            </li>
            <li>
              Ideally, the roof should have minimal shading to maximize sunlight
              exposure.
            </li>
          </ul>
        </div>

        <div className={classes.imglogo}>
          <img src={Orangelogo} className={classes.orglogo} alt="" />
          <img src={Rshade} alt="" className={classes.simg6} />
          <img src={Bluelogo} className={classes.blulogo} alt="" />
        </div>

        <div>
          <h3>Structural Integrity:</h3>
          <ul>
            <li>
              Ensure that your roof has sufficient structural integrity to
              support the weight of solar panels.
            </li>
            <li>
              Consult with a structural engineer or a qualified solar installer
              to assess the load-bearing capacity of your roof.
            </li>
          </ul>

          <p>
            Remember, it is essential to consult with a professional solar
            installer who can evaluate your specific roof type and provide
            customized recommendations. They will consider factors such as roof
            orientation, material, condition, and other site-specific variables
            to determine the most suitable approach for installing solar panels
            on your roof.
          </p>
        </div>

        <div>
          <div className={classes.imglogo}>
            <img src={Orangelogo} className={classes.orglogo} alt="" />
            <img src={Rintegrity} alt="" className={classes.simg7} />
            <img src={Bluelogo} className={classes.blulogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
