import React,{useState} from 'react';

const Form= () => {
const [userName, setuserName] = useState("");
const [value, setValue] = useState('unchecked');
const [name, setName] = useState('');
const handleChange =(e)=>{
	if(e.target.value.length===100){
	window.alert("Maximum characters allowed is only 100")
	}
	setuserName(e.target.value);
}

onChange(e)
{
  const re= /^[0-9\b]+$/;
  if (e.target.value === '' || re.test(e.target.value)){
    this.setState({value: e.target.value})
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
        Please check the box if required
      </label>
      <Checkbox 
      checked={value}
      onChange={setValue}
      />
      <label>
        Enter the days for availability
      </label>
      <input
        name="Enter days"
        value={this.state.value}
        onChange={this.onChange}
      />
      <form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <button type = 'submit'>Click to submit</button>
        </form>
    );
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
