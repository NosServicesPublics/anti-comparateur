#!/bin/sh


set -ve

curl "https://nosservicespublics.getgrist.com/api/docs/hXBbY6ngk5ik/tables/Thematiques/records?sort=Nom" > data/thematiques.json
curl "https://nosservicespublics.getgrist.com/api/docs/hXBbY6ngk5ik/tables/Questions/records?sort=Intitule" > data/questions.json
curl "https://nosservicespublics.getgrist.com/api/docs/hXBbY6ngk5ik/tables/Reponses/records?sort=Qui" > data/reponses.json
