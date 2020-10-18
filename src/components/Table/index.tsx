import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Props {
  rows: Array<{
    id: number;
    last: number;
    lowestAsk: string;
    highestBid: number;
    percentChange: number;
    baseVolume: number;
    quoteVolume: number;
    isFrozen: number;
    high24hr: number;
    low24hr: number;
  }>;
}

export function TableCoins({ rows }: Props) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Preço de execução</TableCell>
            <TableCell>Menor preço</TableCell>
            <TableCell>Maior preço</TableCell>
            <TableCell>Porcentagem </TableCell>
            <TableCell>Unidades básicas </TableCell>
            <TableCell>Unidades cotadas </TableCell>
            <TableCell>Está Congelado </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.last}</TableCell>
              <TableCell>{row.lowestAsk}</TableCell>
              <TableCell>{row.highestBid}</TableCell>
              <TableCell>{row.percentChange}</TableCell>
              <TableCell>{row.baseVolume}</TableCell>
              <TableCell>{row.quoteVolume}</TableCell>
              <TableCell>{row.isFrozen}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
