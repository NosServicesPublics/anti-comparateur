#!/bin/sh

./import.sh
RESULT=`node --eval "const dates = require('./data/dates.json'); console.log(dates.records[0].fields.TODO);"`
if [ "$RESULT" = "false" ];
then
	echo "Nothing new, no need to build"
	exit 0
fi

curl -X PATCH https://nosservicespublics.getgrist.com/api/docs/hXBbY6ngk5ik/tables/Dates/records -H "Content-Type: application/json" -d @- <<EOF
{
	"records": [{
		"id": 1,
		"fields": {
			"Manuel": "`date --iso-8601=seconds`"
		}
	}]
}
EOF

npm ci
npm run build
touch out/.nojekyll

echo "deployment_required=true" >> $GITHUB_OUTPUT
