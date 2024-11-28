import "./usertable.scss"
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc  } from "firebase/firestore";
import { db } from "../../firebase"; 




const Usertable = () => {
  const [rows, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      let list = []
      const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  list.push({ id: doc.id, ...doc.data()})
});
setData(list)
    }
    fetchData()
  },[])

  const handleDelete = async(id) =>{
    await deleteDoc(doc(db, "users", "id"));
    setData(rows.filter((item) => item.id !== id));
  }

    return (
        <div className="usertable">
          
        <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        <Link to="/users/new" style={{textDecoration: "none"}}>
            <Button sx={{ backgroundColor: 'gray', color: 'white', marginRight: 2, marginBottom: 2 }}>Add New</Button>
                
                </Link>
          </Box>
      <Sheet
        variant="outlined"
        sx={{
          '--TableCell-height': '40px',
          // the number is the amount of the header rows.
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          '--Table-firstColumnWidth': '80px',
          '--Table-lastColumnWidth': '144px',
          // background needs to have transparency to show the scrolling shadows
          '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
          '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
          overflow: 'auto',
          background: (theme) =>
            `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local, local, scroll, scroll',
          backgroundPosition:
            'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
          backgroundColor: 'background.surface',
        }}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            '& tr > *:first-child': {
              position: 'sticky',
              left: 0,
              boxShadow: '1px 0 var(--TableCell-borderColor)',
              bgcolor: 'background.surface',
            },
            '& tr > *:last-child': {
              position: 'sticky',
              right: 0,
              bgcolor: 'var(--TableCell-headBackground)',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 'var(--Table-firstColumnWidth)' }}>Name</th>
              <th style={{ width: 200 }}>Email</th>
              <th style={{ width: 200 }}>Phonenumber</th>
              <th style={{ width: 200 }}>Address</th>
              <th style={{ width: 200 }}>Country</th>
              <th
                aria-label="last"
                style={{ width: 'var(--Table-lastColumnWidth)' }}
              />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phonenumber}</td>
                <td>{row.address}</td>
                <td>{row.country}</td>
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="sm" variant="plain" color="neutral">
                      Edit
                    </Button>
                    <Button size="sm" variant="soft" color="danger" onClick={() =>handleDelete(row.id)}>
                      Delete
                    </Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Box>
      
        </div>
    )
}

export default Usertable