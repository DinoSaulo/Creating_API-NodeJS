// Repositório pattern
// Esse repositório serve para evitar repetição e ajudar na reutilização de códigos pelos controllers
// delega o acesso ao banco a esse repositório

'use strict' // Forçando o javascript a ser estruturado

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product
        .find({
            active: true
        }, 'title price slug');

    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags');

    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id);

    return res;
}

exports.getByTag = async(tag) => {
    const res = await Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags');

    return res;
}

// POST
exports.create = async(data) => {
    var product = new Product(data);
    await product.save();

}

// PUT
exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        })
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id);
}