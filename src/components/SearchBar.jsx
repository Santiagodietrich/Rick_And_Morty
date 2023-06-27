export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}

//OTRA FORMA//////////////////////////////////////////////////////////////////////////////

// export default function SearchBar(props) {
//    return (
//       <div>
//          <input type='search' />
//          <button onClick={props.onSearch}>Agregar</button>
//       </div>
//    );
// }
