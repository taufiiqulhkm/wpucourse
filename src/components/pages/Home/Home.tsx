import Button from "../../ui/Button";

const makanan = [
    {
        name:'Fried chicken',
        price:2000
    },
    {
        name:'Pizza',
        price:3000
    }
]

const handleClickLogin = () => {
alert('helo')
}

const Home = () => {
//   const showButton = false;

  return (
    <main>
      <h1 onClick = {handleClickLogin}>Hello world</h1>
      {makanan.map((item,index) => (
        <Button key={`makanan-${index}`} type="button"> 
        {item.name}
        </Button>
      ))}
      {/* {!showButton ? <Button type='button'> click me</Button> : <Button> taufiiq</Button>} */}
      
    </main>
  );
};

export default Home;
