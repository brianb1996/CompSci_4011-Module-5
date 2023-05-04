import React from 'react'
import { valueOfProduct, currencyFormat } from '../api/values'
import { makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'



const ProductTable = ({ products = [], showTotalValue = false, showStockValue = false}) => {
    const stockValue = value => {
        if (showStockValue){
            return value
        }else{
            if (value > 10){
                return 'In Stock'
            }else if (value === 0) {
                return 'Out of Stock'
            }else{
                return`Only ${value} left`
            }
        }

    }

    const tableRows = products.map(product => {
        return (
            <TableRow key={product.name}>
                <TableCell>
                    {product.name}
                </TableCell>
                <TableCell align="center">
                    {currencyFormat(product.price)}
                </TableCell>
                <TableCell align="center">
                    {stockValue(product.inStock) }
                </TableCell>
                {showTotalValue && (<TableCell align="center">{currencyFormat(valueOfProduct(product.price, product.inStock))}</TableCell>)}
            </TableRow>
        )
    })


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Availability</TableCell>
                        {showTotalValue && <TableCell align="center">Value In Store</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductTable