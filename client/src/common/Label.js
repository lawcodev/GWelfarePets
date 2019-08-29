import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

const Tables = ({ headers, rows }) =>
<div className="animated fadeIn">
  
                <tr>
                  <td>{rows.id}</td>
                  <td>{rows.name}</td>
                  <td>{rows.value}</td>
                </tr>
              
          
</div>
export default Tables;
