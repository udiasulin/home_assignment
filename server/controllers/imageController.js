const axios = require("axios");

// Api call boilerplate
const pixabayApi = (category, currentPage) => ({
    method: 'GET',
    url: `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&${category}`,
    params: {
        q: category,
        page: currentPage
    }
})

//calling api and sorting the results
const sortedImages = async (req, res) => {
    const { category } = req.params;
    const url = pixabayApi(category)
    try {
        const response = await axios(url);
        // sorting hte results
        const result = response.data.hits.sort((elem1, elem2) => elem1.id - elem2.id);
        res.status(200).send(result)
    } catch (err) {
        return res.status(400).send(err)
    }


}

//calling api and paginate the results
const paginateCall = async (req, res) => {
    const { category, page } = req.params;
    const url = pixabayApi(category, page)
    try {
        const response = await axios(url);
        const paginatedResults = paginate(response.data.hits, 9, page)
        res.status(200).send(paginatedResults)
    } catch (err) {
        return res.status(400).send(err)
    }
}

// the pagination function 
const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

module.exports = {
    sortedImages: sortedImages,
    paginateCall: paginateCall
}