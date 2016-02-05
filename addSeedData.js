var Book = require('./app/models/books.js');
var User = require('./app/models/users.js');
module.exports.add = function() {
    console.log("In Seed Data Function");
    Book.remove({}, function(err) {
        if (err) {
            console.log("Error");
        }
        else {
            var bookArray = [{
                "userId": "56aaecbbb9a5f4c1096633d2",
                "bookName": "Harry Potter and the Sorcerer's Stone",
                "posterUrl": "https://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70AZ6LjNFxINV3TX4VzIfiNHgAgfaac54rHXXrmt0OkoQZaM_G1mIpzNKQ8uJT_62vJxRTk_45PGfrHHXie6N5KpXSoGrjGbibZ4Fe-u5c52JffrSCsEisCiO-u3FPAymZqXCTB",
                "bookAuthor": "J.K. Rowling" 
            }, {
                "userId": "56aaecbbb9a5f4c1096633d2",
                "bookName": "Harry Potter and the Prizoner of Azkaban",
                "posterUrl": "https://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73S5_b0bzreWY0qrdAVzeTtU6wYkEz8efUqtGA5FnjW9sJqTqC8ufRf0gGkTqZibhCoqBi6p-zTHgUXTphE90NTl_vNDYxVzzTF9MT1zbs_JvmAVy6q3zt4yUuUUNdIjeeYT0BW",
                "bookAuthor": "J.K. Rowling" 
            }, {
                "userId": "56aaecbbb9a5f4c1096633d2",
                "bookName": "Harry Potter and the Half-Blood Prince",
                "posterUrl": "https://books.google.com/books/content?id=LeTBBQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70e6J_zTBFRnakU48ltg-yL1WfJlw1nzNu19xfOqvKB5dI1Rps3FJXrvydmtk9NyAEWZs9v6JuBZEHx5ZelxE7b7pehBnf_CTvRvvWdXdIuXDbsNaHSDCJ4dF9fHAmY-tlXcdc6",
                "bookAuthor": "J.K. Rowling" 
            }, {
                "userId": "56ac2c4c4264561b1ea7ab5b",
                "bookName": "The Tale of Despereaux",
                "posterUrl": "https://books.google.com/books/content?id=VNWJHwYbKtcC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73ZnfdzTuayX-QeL0VbJBrqxFt9Eta1XBruN0I6TpDq7w-4-3ftnRfWTPJPA34zt5X6G42IY1tAXsOG0oX6RjPHrHrQc2VPJKN9vwAa_F2sTIUDHmIajokdXhagdhwuNR7W5o5Z",
                "bookAuthor": "Kate DiCamillo" 
            }, {
                "userId": "56ac2c4c4264561b1ea7ab5b",
                "bookName": "Mossflower",
                "posterUrl": "https://books.google.com/books/content?id=XobuWfWm6FwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72ktyLAjJRSiL-pde11EyCS_ZsT9U9GGmMThB0jtlBILTrkkEldtg-BKBnPUtZSCrJUS0wyShC54kanYMLQZ0DjL7Z2Esc2QJysndFLSsek-x-KSIR52dMfUgS24FiPBAYr6Z0U",
                "bookAuthor": "Brian Jacques" 
            }, {
                "userId": "56ac2c4c4264561b1ea7ab5b",
                "bookName": "Redwall",
                "posterUrl": "https://books.google.com/books/content?id=RErLAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73IFho10EwJnJwKmB2apIX2QcCtmZt-KhLqErMWz0DmP17kOPeSD27NW-MpnHSxrzCTJN8pPDxrzb1Itlwml429b9P7eJOGqOZqXvnovPbmI5d_AWo0jMdZLZNJNWJNQdXPS2pd",
                "bookAuthor": "Brian Jacques" 
            }];

            User.find({}, function(err, users) {
                if (err) {
                    console.log("Error");
                }
                else {
                    var num = 0;
                    var total = 0;
                    users.forEach(function(user) {
                        console.log("In for each loop", user.github.username);
                        total = total + 3;
                        console.log("Total is", total)
                        for (num; num < total; num++) {
                            var book = new Book();
                            console.log("In for loop");
                            book.userId = user._id;
                            book.bookName = bookArray[num].bookName;
                            console.log("Adding book name", bookArray[num].bookName);
                            book.posterUrl = bookArray[num].posterUrl;
                            console.log("Adding poster url", bookArray[num].posterUrl);
                            book.bookAuthor = bookArray[num].bookAuthor;
                            console.log("Adding book author", bookArray[num].bookAuthor);
                            book.save(function(err) {
                                if (err) {
                                    console.log("Error");
                                }
                            });
                        }
                    });
                }
            });
        }
    });

};