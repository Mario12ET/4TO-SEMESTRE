const e1=()=>{
  Swal.fire('HOLA')
}

const e2=()=>{
    Swal.fire({
        title: 'Estas Seguro?',
        text: "Esta Accion No Se Puede Revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminalo'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'El Archivo Se Elimino',
            'Hecho'
          )
        }
      })
}

const e3=()=>{
  Swal.fire({
      title: 'Con fondo',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
}

const e4=()=>{
  Swal.fire({
      title: 'Fondo Direfente xd',
      width: 600,
      padding: '3em',
      color: '#FF4937',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,254,0.3)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
}

const e5=()=>{
  Swal.fire('Adios')
}