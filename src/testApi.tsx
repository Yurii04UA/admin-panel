import axios from "axios";


type Test = {
  id:number;
  userId: number;
  title: string
  body: string
};
 
export const testApi = () => {
   
  const newUser = {
    id:'3333',
    avatar: "https://robohash.org/omnismolestiasdolor.png?size=50x50&set=set1",
    username: "aaa",
    registeredAt: "01/2/2012",
    address: "local",
    phone: "333-3333-33",
  };

  const clickPostMain = () => {
    axios.post("https://my.api.mockaroo.com/contacts.json?key=48de96e0&__method=POST", newUser).then(res => console.log(res.data),
    );
  };
  let result:Test[] = [];

  const newUser2 = {
    userId: 1,
    title: "test title",
    body: "test",
  };

  const clickGet = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => result = res.data,
   
    );
  };
  const clickPost = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", newUser2).then(res => console.log([...result, res.data]),
    );
  };

  return (
    <div>
 <button onClick={clickGet} >get</button>
       <button onClick={clickPost} >post</button>
       <button onClick={clickPostMain} >  MyNewData</button>
    </div>
  );
};
