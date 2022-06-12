const replacePunctuation = (startingString) => {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|”}~]/g;
    const result = startingString.replace(regex, ' ');
    return result;
}

module.exports = replacePunctuation;