import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addToFav, removeFromFav, fetchJobs } from '../store/actions'
import JobListing from './JobListing'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    addToFav: job => dispatch(addToFav(job)),
    removeFromFav: job => dispatch(removeFromFav(job)),
    fetchJobs: (description, location) => dispatch(fetchJobs(description, location))
})

class SearchPage extends React.Component {

    state = {
        description: "",
        location: "",
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault()
        console.log("about to fetch")
        this.props.fetchJobs(this.state.description, this.state.location)
    }

    render() {

        console.log(this.props)
        console.log(this.state)
        return <Container>
            <Row className="mt-5">
                <Col xs={12} md={8} className="mx-auto">
                    <h1>Search Jobs...</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="d-flex my-3">
                            <Form.Control name="description" className="me-1" type="search" placeholder="Search jobs" onChange={this.handleChange} />
                            <Form.Control name="location" type="search" placeholder="Location" onChange={this.handleChange} />
                        </div>
                        <Form.Control type="submit" value="Submit" />
                    </Form>
                    {this.props.results.list.map(result => {
                        const isFav = this.props.fav.favourites.some(f => f.id === result.id)
                        return <JobListing job={result} isFav={isFav} addToFav={this.props.addToFav} removeFromFav={this.props.removeFromFav} />
                    })}
                </Col>
            </Row>
        </Container>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)