import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Search() {
    return (
        <section>
            <div class="input-group">
                <div class="form-outline">
                    <input id="search-focus" type="search" id="form1" class="form-control" />
                    <label class="form-label" for="form1">Search</label>
                </div>
                <button type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </section>
    );

}

export default Search;