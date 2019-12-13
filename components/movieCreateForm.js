import { useState, useEffect } from 'react';

const form = (props) => {
    //const [initialdataLoaded, setinitialdataLoaded] = useState(false)

    const defaultdata = {
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: '',
        longDesc: '',
        genre: []
    };

    let formData = props.movie ? { ...props.movie } : defaultdata;

    // formData = {
    //     ...formData, movie: { ...formData.movie, genre: formData.movie ? formData.movie.genre.split(',') : [] }
    // }
    console.log(formData)
    const [form, setForm] = useState(formData)


    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;

        setForm({
            ...form, [name]: event.target.value
        })

    }

    const handleGenreChange = () => {
        const { options } = event.target;
        const name = event.target.name;
        const optionsLength = options.length;
        let value = [];
        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }

        }
        setForm({
            ...form, [name]: value
        })
    }

    const submitForm = () => {
        props.handleFormSubmit({ ...form })
    }

    return (
        <form className="my-4">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Lord of the Rings" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    name='description'
                    value={form.description}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input
                    name="rating"
                    value={form.rating}
                    onChange={handleChange}
                    type="number"
                    max="5"
                    min="0"
                    className="form-control"
                    id="rating" placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="image"
                    placeholder="http://....." />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input
                    name="cover"
                    value={form.cover}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="cover"
                    placeholder="http://......" />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea
                    name="longDesc"
                    value={form.longDesc}
                    onChange={handleChange}
                    className="form-control"
                    id="longDesc"
                    rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select
                    multiple
                    name="genre"
                    value={form.genre}
                    onChange={handleGenreChange}
                    className="form-control"
                    id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
            <button onClick={submitForm} type="button" className="btn btn-primary ">{props.submitButton}</button>
        </form >
    )
}

export default form;