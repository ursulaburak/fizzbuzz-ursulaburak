function fizzbuzzSwitch(n) {
    // Kodlar buraya gelecek
    switch (true) {
    case n % 15 === 0:
      return 'FizzBuzz';
    case n % 3 === 0:
      return 'Fizz';
    case n % 5 === 0:
      return 'Buzz';
    default:
      return n;
  }
}

module.exports = fizzbuzzSwitch;