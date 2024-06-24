#!/bin/sh

set -ve

curl "https://nosservicespublics.getgrist.com/api/docs/hXBbY6ngk5ik/tables/Thematiques/records?sort=Position" > data/thematiques.json
curl "https://nosservicespublics.getgrist.com/api/docs/hXBbY6ngk5ik/tables/Questions/records?sort=Position" > data/questions.json
curl "https://nosservicespublics.getgrist.com/api/docs/hXBbY6ngk5ik/tables/Reponses/records?sort=Qui" > data/reponses.json
curl "https://nosservicespublics.getgrist.com/api/docs/hXBbY6ngk5ik/tables/Dates/records" > data/dates.json
