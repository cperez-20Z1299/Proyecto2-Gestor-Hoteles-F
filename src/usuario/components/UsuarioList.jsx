export const UsuarioList = ( { nombre, correo, password, rol, usuario } ) => {
  
    return (
      <>
        <tr>
          <th> { nombre } </th>
          <td> { correo } </td>
          <td> { password } </td>
          <td> { rol } </td>
          <td>
            <button className="btn btn-warning m-1">Editar</button>
            <button className="btn btn-danger m-1">Eliminar</button>
          </td>
          <td> { usuario?.nombre } </td>
        </tr>
      </>
    )
  }