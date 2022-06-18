const Component = ({ data, children }) => {
  return <ul>{data.map((item, index) => children(item, index))}</ul>;
};

const phone = ["HTC", "Iphone", "SAMSUNG", "SONY", "TOMI-XIAOMI"];
// App
const App = () => {
  return (
    <div className="wrapper">
      <Component data={phone}>
        {(item, index) => (
          <li className={index} key={item}>
            {item}
          </li>
        )}
      </Component>
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App />);
