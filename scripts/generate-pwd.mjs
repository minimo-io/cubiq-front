// scripts/generate-pwd.mjs
// node scripts/generate-pwd.mjs "my-secret-password"
import bcrypt from 'bcrypt';

// Get the password from the command line arguments
const plainPassword = process.argv[2];

if (!plainPassword) {
	console.error('❌ Error: Please provide a password as an argument.');
	console.log('Usage: node scripts/generate-password.mjs "yourpassword123"');
	process.exit(1);
}

const saltRounds = 10;

async function generate() {
	try {
		console.log('⏳ Hashing...');
		const hash = await bcrypt.hash(plainPassword, saltRounds);

		console.log('\n--------------------------------------------------');
		console.log('✅ HASH GENERATED SUCCESSFULLY');
		console.log('--------------------------------------------------');
		console.log(hash);
		console.log('--------------------------------------------------\n');
	} catch (err) {
		console.error('❌ Error hashing password:', err);
	}
}

generate();
