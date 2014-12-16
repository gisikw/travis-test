desc 'Run node mocha from within a Ruby env'
task :mocha do
  mocha_bin = File.expand_path('node_modules/mocha/bin/mocha')
  system("#{mocha_bin} spec")
end

task :default => :mocha
