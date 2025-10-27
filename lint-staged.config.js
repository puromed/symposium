export default {
  '**/*.php': ['./vendor/bin/sail bin duster fix'],
  '**/*': ['./vendor/bin/sail npx prettier --write --ignore-unknown'],
};