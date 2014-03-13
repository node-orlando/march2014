connect-method-override-get
===========================

Like (Connect's)[http://www.senchalabs.org/connect/] (methodOverride)[http://www.senchalabs.org/connect/methodOverride.html], except it supports GET requests also.

Usage with a Connect app
-------------------------

	var app = connect();
    app.use(connect.bodyParser());
    app.use(require('methodOverrideGet')({key: '_method'));

Usage with an Express app
-------------------------

	var app = express();
    app.use(express.bodyParser());
    app.use(require('methodOverrideGet')({key: '_method'));


MIT License
------------

Copyright (c) 2010 by (Nathan Friedly)[http://nfriedly.com]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
