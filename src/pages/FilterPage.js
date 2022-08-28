import React,{useState,useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";

const FilterPage = () => 

    { const cityRef=useRef();
      const genderRef=useRef();
      const ageRef=useRef()
      const navigate = useNavigate();

      function saveFilter(){
        const user={
          city:cityRef.current.value,
          gender:genderRef.current.value,
          age:ageRef.current.value
        }
        console.log(user)
        navigate("/like");
  
      }
      
        const [value,onChange]=useState(1);
        useEffect(()=>{
            const ele = document.querySelector('.buble');
          if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
          }
        })
    return (<div>

        <div className="border">
        <input type="text" ref={cityRef} className="input" list="cities" />
<datalist id="cities">
  <option>Vilnius</option>
  <option>Nida</option>
  <option>Druskininkai</option>
  <option>Klaipeda</option>
  <option>Kintai</option>
</datalist>
<h5>(select city)</h5>
        </div>
        

        <div className="border">
        <input type="text" ref={genderRef} className="input" list="gender" />
<datalist id="gender">
  <option>Woman</option>
  <option>Man</option>
  
</datalist>
<h5>(select gender)</h5>
        </div>

<div className="border">
      <input type="range" min="18" max="50" ref={ageRef} value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <div> 
        <h5>(select age 18 to 50)</h5>
        <h4>selected age:   {value}</h4>
      </div>
      </div>

      <button onClick={saveFilter} className="m-50">SAVE FILTER</button>
   



    </div>
      
    )
}
export default FilterPage;