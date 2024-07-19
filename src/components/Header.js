function Header({ name, address }) {
  return (
    <header>
      <h1>{name}</h1>

      <p>{address}</p>
      <p>[City, State, ZIP Code]</p>
      <p>
        Email: <a href="mailto:[Email Address]">[Email Address]</a>
      </p>
      <p>
        Phone: <a href="tel:[Phone Number]">[Phone Number]</a>
      </p>
      <p>
        <a href="[LinkedIn Profile]">LinkedIn Profile</a> |{" "}
        <a href="[Website/Portfolio]">Website/Portfolio</a>
      </p>
    </header>
  );
}

export default Header;

// const Header = ({ name, address }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{address}</p>
//     </div>
//   );
// };

// export default Header;
