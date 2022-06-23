# Introduction
- A nodejs log parser project

- Tech: NodeJs, Typescript

# Project Setup

- Clone `$ git clone https://github.com/guptayush02/log-parser.git`

- Install packages `$ npm install`

- Parse log file `npm run parser --input=<path_to_app_log_file> --output=<path_to_json_file>`

- Sample app.log is in log folder `log/app.log`

# Unit Test Cases
- Run all unit test cases `npm run test:unit`

- Run specific test case `npm run test:unit <path_to_test_file_name>`

# Sample input/output file

- Input file
app.log
`
2044-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}
2044-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e979","details":"Service is started"}
2044-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e971","details":"Service is started"}
2044-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e972","details":"Service is started"}
`

- Output file
`
[{"timestamp":"2044-08-09T02:12:51.253Z","loglevel":"info","errors":"Service is started","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978"}]{"timestamp":"2044-08-09T02:12:51.253Z","loglevel":"info","errors":"Service is started","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e979"}]{"timestamp":"2044-08-09T02:12:51.253Z","loglevel":"info","errors":"Service is started","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e971"},{"timestamp":"2044-08-09T02:12:51.253Z","loglevel":"info","errors":"Service is started","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e972"}]
`
