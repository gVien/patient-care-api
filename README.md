# patient-care-api

An API to get patient care providers data. This API follows best practices with versioning, which is currently `v1`. See documentation to get the data.

#### Getting Started

* Pull repo
* Make sure you have Ruby installed (currently using 2.3.0)
* `gem install bundler`
* `bundle install`
* `bundle exec rake db:create` then `bundle exec rake db:migrate`
* `bundle exec rake db:seed`
* run `rails s` to start server
* visit your `localhost:3000`

### Documentation
#### GET `/api/v1/providers`

Response: 
```json

[{
    "id": 1,
    "name": "Stephen's Care Home",
    "location": "San Francisco, CA",
    "phone_number": "415-715-9717",
    "provides": ["Dialysis", "Physical Therapy"],
    "created_at": "2016-06-20T18:56:35.016Z",
    "updated_at": "2016-06-20T18:56:35.016Z"
}, {
    "id": 2,
    "name": "Justin's Care Home",
    "location": "Los Altos, CA",
    "phone_number": null,
    "provides": ["Diabetes Care", "Medication Management", "Outpatient Therapy"],
    "created_at": "2016-06-20T18:56:35.036Z",
    "updated_at": "2016-06-20T18:56:35.036Z"
}, {
    "id": 3,
    "name": "Bode, Franecki and Hagenes Care Home",
    "location": "Los Angelos, CA",
    "phone_number": "176.405.9895",
    "provides": ["Diabetes Care", "Dialysis", "Medication Management", "Outpatient Therapy", "Oxygen", "Physical Therapy"],
    "created_at": "2016-06-20T18:56:35.764Z",
    "updated_at": "2016-06-20T18:56:35.764Z"
}]
```

#### GET `/api/v1/providers/{id}`

Response: 
```json
{
    "id": 4,
    "name": "Smith-Effertz Care Center",
    "location": "San Francisco, CA",
    "phone_number": null,
    "provides": ["Diabetes Care", "Dialysis", "Medication Management", "Outpatient Therapy", "Oxygen", "Physical Therapy", "Speech Therapy", "Wound Care"],
    "created_at": "2016-06-20T18:56:35.773Z",
    "updated_at": "2016-06-20T18:56:35.773Z"
}
```

#### POST `/api/v1/providers`

Body Message

```json
{
    name: "Bode, Franecki and Hagenes Care Home",
    location: "Los Angelos, CA",
    phone_number: "176.405.9895",
    provides: [
        "Diabetes Care",
        "Dialysis",
        "Medication Management",
        "Outpatient Therapy",
        "Oxygen",
        "Physical Therapy"
    ]
}
```

Response

```json

{
    "id": 3,
    "name": "Bode, Franecki and Hagenes Care Home",
    "location": "Los Angelos, CA",
    "phone_number": "176.405.9895",
    "provides": ["Diabetes Care", "Dialysis", "Medication Management", "Outpatient Therapy", "Oxygen", "Physical Therapy"],
    "created_at": "2016-06-20T18:56:35.764Z",
    "updated_at": "2016-06-20T18:56:35.764Z"
}
```

#### PUT `/api/v1/providers/{id}`

```json
{
    location: "San Jose, CA"
}
```

```json

{
    "id": 3,
    "name": "Bode, Franecki and Hagenes Care Home",
    "location": "San Jose, CA",
    "phone_number": "176.405.9895",
    "provides": ["Diabetes Care", "Dialysis", "Medication Management", "Outpatient Therapy", "Oxygen", "Physical Therapy"],
    "created_at": "2016-06-20T18:56:35.764Z",
    "updated_at": "2016-06-20T18:56:35.764Z"
}
```

#### DELETE `/api/v1/providers/{id}`
This deletes the provider with the specified `id` 
