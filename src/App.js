import React,{useState} from 'react';
import { Checkbox } from 'evergreen-ui';

const Form= () => {
const [userName, setuserName] = useState("");
const [email, setEmail] = useState("");
const [name, setName] = useState('');
const [Daysofavailabity, setDaysAvail] = useState('');
const handleChange =(e)=>{
	if(e.target.value.length===100){
	window.alert("Maximum characters allowed is only 100")
	}
	setuserName(e.target.value);
  setEmail(e.target.value);
}

const handleDaysofAvailabilityChange= (e)=>
{
  const data_input = /^[+-]?\d*(?:[.,]\d*)?$/;
  if (data_input.test(e.target.value)){
    setDaysAvail.setState({Daysofavailabity: e.target.value});
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted, ${name}');
}

return (
	<div>
	<label>
			Please enter username:
			</label>
			<input
				name="username"
				value={userName}
				onChange={ handleChange}
			/>
    <label>
      Please enter email:
      <input
        name="email"
        value={email}
        onChange={ handleChange}
      />
    </label>
    <Checkbox onChange={ () => {
        alert("You Checked the box, please fill in the days for availability")
      }} label="Please check only if you have days confirmed"
      />
    <label>
         {"\n"}Enter the days for availability
        <input
          type="text"
          id="availableDays"
          pattern="[+-]?\d+(?:[.,]\d+)?"
          name="Days of availability"
          placeholder='Enter days of availability'
          value={Daysofavailabity}
          onChange={handleDaysofAvailabilityChange}
        />
    </label>
    <form  onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <button type = 'submit'> {"\n"}Click to submit</button>
    </form>
</div>
)
}

function App() {
return (
	<div className="App">
	<h1>Welcome to the sample form created using react JS</h1>
	<Form/>
	</div>
);
}


export default App;
