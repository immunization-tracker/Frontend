const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'vaccines', shell: true };
require('child_process').spawn('npm', args, opts);
