import logo from './logo.svg';
import './App.css';
import InstaFeeds from './component/InstaFeeds';

function App() {
  return (
    <>
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>Instagram Feed with Instagram API</h1>
      </header>

      <InstaFeeds token={"https://graph.instagram.com/1296029344220515?fields=id,username&client_secret=a60bc2f7af31187b685d5874da8a1314&access_token=IGQVJWTXJmNVdIOVdIbVlNTkdiWGNfZAVhuY2VLRmRJZAFZAfS1NJSUhkRWt2Mll0d0NqTTBXT2x2cFdmYVQ5a3dIREVqSnI3RVYtVVJ1Wkt5WUx4VlBQTlhxeUYwckpiR1I4S3pZAMldnNG5jMEFTa3RVcAZDZD"} limit={12}/>
    </>
    
  );
}

export default App;
