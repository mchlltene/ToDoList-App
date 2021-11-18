import React from 'react';

class Hello extends React.Component {
    render(){
        // karene kelas jadi pake this
        const {name, prodi, year } =this.props;
        return(
            
            <h2> {name} from prodi {prodi} is Learning React JS  {year}</h2>
        );
    }
}

export default Hello;