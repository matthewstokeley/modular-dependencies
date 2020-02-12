### Modular Dependencies

An interactive configuration builder for an installer that runs bash scripts to quickly bootstrap dependencies for the modern javascript development environment.

Goals:
    - [ ] One-click build-environment-to-deploy
        - [ ] CI Integration
    - [ ] Modular, extensible builds (dependency agnostic) - flexible and easy to add to in the future
    - [ ] Dependency management workflow
        - [x] Dependency management spreadsheet
        - [x] Dependency management flowchart
￼
        - [ ] Source map

    - [ ] Test Runner, Task Runner, and Script object integration
        - [ ] Smart child process kick outs to npm run, gulp and ava
    - [ ] Concurrency 
    - [ ] Ava integration

To do:
- [ ] Port bash to node
- [ ] Event dispatcher for concurrent task delegation
    - [ ] Review other mqs 
- [x] Create example config file
- [x] Scaffold scripts by layer / component
- [ ] “Global dependencies” - adding these to the configuration file will install them for all modules
    - [x] Typescript
    - [ ] Git / Version Control
- [ ] Interactive CLI
- [x] Flowchart for dependency management workflow