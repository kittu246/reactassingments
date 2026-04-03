import React ,{useState} from "react";

const data = [
    {
      country: "India",
      city: ["Delhi", "Mumbai"],
    },
    {
      country: "UK",
      city: ["London", "Manchester", "Manchester"],
    },
    {
      country: "USA",
      city: ["Miami", "New York", "Miami"],
    },
  ];

const CityDropDown =() =>{

   const [selectedCountry,setSelectedCountry] =useState("");
   const [selectedCity,setSelectedCity] =useState("");
   const [cities,setCities] =useState([]);

   const handleSelectedCountry=(e) =>{
    setSelectedCountry(e.target.value);

    const found = data.find((item) => item.country === e.target.value)
    setCities(found?found.city:[]);

   }


    return(
        <div>
            <select onChange={handleSelectedCountry}  value={selectedCountry}>
                <option value=""> Select Country</option>
                {data.map((item,index)=>(
                    <option key={index}>
                        {item.country}
                    </option>
                ))}

            </select>

            <select  onChange={(e) =>setSelectedCity(e.target.value) } value={selectedCity}>
                <option value="">Select city</option>
                {cities.map((item,index)=>(
                    <option key={index}>{item}</option>
                ))}


            </select>

        </div>
       
    )

}

export default CityDropDown;

