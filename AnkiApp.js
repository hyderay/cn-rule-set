// parse the original response body as JSON
let obj = JSON.parse($response.body);

// flip "has_unlimited" to true
obj.has_unlimited = true;

// bump both review‐gate thresholds to 1000
obj.flags.review_gate.num_daily_reviews_gate_threshold = 1000;
obj.flags.review_gate.num_daily_reviews_warn_threshold = 1000;

// serialize back to a string and return
$done({ body: JSON.stringify(obj) });
