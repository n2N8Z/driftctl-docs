"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21930],{11879:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"0.21.0","label":"0.21.0","banner":"unmaintained","badge":true,"className":"docs-version-0.21.0","isLast":false,"docsSidebars":{"version-0.21.0/docs":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"What is driftctl?","href":"/0.21.0/","docId":"intro"},{"type":"link","label":"Installation","href":"/0.21.0/installation","docId":"installation"},{"type":"link","label":"Usage","href":"/0.21.0/usage","docId":"usage"},{"type":"link","label":"Limitations","href":"/0.21.0/limitations","docId":"limitations"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Usage","items":[{"type":"category","collapsed":true,"collapsible":true,"label":"Commands","items":[{"type":"link","label":"Scan","href":"/0.21.0/usage/cmd/scan-usage","docId":"usage/cmd/scan-usage"},{"type":"link","label":"Completion","href":"/0.21.0/usage/cmd/completion-usage","docId":"usage/cmd/completion-usage"},{"type":"link","label":".driftignore generator","href":"/0.21.0/usage/cmd/gen-driftignore-usage","docId":"usage/cmd/gen-driftignore-usage"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Flags","items":[{"type":"link","label":"Crash Reporting","href":"/0.21.0/usage/flags/crash-reporting","docId":"usage/flags/crash-reporting"},{"type":"link","label":"Version Check","href":"/0.21.0/usage/flags/version-check","docId":"usage/flags/version-check"},{"type":"link","label":"Disable telemetry","href":"/0.21.0/usage/flags/disable-telemetry","docId":"usage/flags/disable-telemetry"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Filtering","items":[{"type":"link","label":".driftignore","href":"/0.21.0/usage/filtering/driftignore","docId":"usage/filtering/driftignore"},{"type":"link","label":"Filter Rules","href":"/0.21.0/usage/filtering/rules","docId":"usage/filtering/rules"}]},{"type":"link","label":"Log level","href":"/0.21.0/usage/log-level","docId":"usage/log-level"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Providers","items":[{"type":"category","collapsed":true,"collapsible":true,"label":"AWS","items":[{"type":"link","label":"Authentication","href":"/0.21.0/providers/aws/authentication","docId":"providers/aws/authentication"},{"type":"link","label":"Supported Resources","href":"/0.21.0/providers/aws/resources","docId":"providers/aws/resources"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"GitHub","items":[{"type":"link","label":"Authentication","href":"/0.21.0/providers/github/authentication","docId":"providers/github/authentication"},{"type":"link","label":"Supported Resources","href":"/0.21.0/providers/github/resources","docId":"providers/github/resources"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Google","items":[{"type":"link","label":"Authentication","href":"/0.21.0/providers/google/authentication","docId":"providers/google/authentication"},{"type":"link","label":"Supported Resources","href":"/0.21.0/providers/google/resources","docId":"providers/google/resources"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Azure","items":[{"type":"link","label":"Authentication","href":"/0.21.0/providers/azure/authentication","docId":"providers/azure/authentication"},{"type":"link","label":"Supported Resources","href":"/0.21.0/providers/azure/resources","docId":"providers/azure/resources"}]}],"collapsible":true,"collapsed":true},{"type":"category","label":"CI/CD","items":[{"type":"link","label":"Introduction","href":"/0.21.0/ci_cd/intro","docId":"ci_cd/intro"},{"type":"category","collapsed":true,"collapsible":true,"label":"Guides","items":[{"type":"link","label":"CircleCI","href":"/0.21.0/ci_cd/guides/circleci","docId":"ci_cd/guides/circleci"},{"type":"link","label":"GitHub Action","href":"/0.21.0/ci_cd/guides/ghaction","docId":"ci_cd/guides/ghaction"},{"type":"link","label":"GitlabCI","href":"/0.21.0/ci_cd/guides/gitlabci","docId":"ci_cd/guides/gitlabci"},{"type":"link","label":"Jenkins","href":"/0.21.0/ci_cd/guides/jenkins","docId":"ci_cd/guides/jenkins"}]}],"collapsible":true,"collapsed":true}]},"docs":{"ci_cd/guides/circleci":{"id":"ci_cd/guides/circleci","title":"CircleCI","description":"You can integrate driftctl in CircleCI by using the official orb.","sidebar":"version-0.21.0/docs"},"ci_cd/guides/ghaction":{"id":"ci_cd/guides/ghaction","title":"GitHub Action","description":"You can run a full driftctl scan in your GitHub Actions workflow by using the official action.","sidebar":"version-0.21.0/docs"},"ci_cd/guides/gitlabci":{"id":"ci_cd/guides/gitlabci","title":"GitlabCI","description":"You can integrate driftctl in GitlabCI by taking as example this repository.","sidebar":"version-0.21.0/docs"},"ci_cd/guides/jenkins":{"id":"ci_cd/guides/jenkins","title":"Jenkins","description":"You can integrate driftctl in Jenkins and within your GitOps workflow to get something like this:","sidebar":"version-0.21.0/docs"},"ci_cd/intro":{"id":"ci_cd/intro","title":"Introduction","description":"driftctl can be viewed as a drift monitoring tool, and thus, it needs to run continuously to detect new drifts.","sidebar":"version-0.21.0/docs"},"installation":{"id":"installation","title":"Installation","description":"driftctl is available on Linux, macOS and Windows.","sidebar":"version-0.21.0/docs"},"intro":{"id":"intro","title":"What is driftctl?","description":"driftctl is CLI tool that measures infrastructure as code coverage, and tracks infrastructure drift.","sidebar":"version-0.21.0/docs"},"limitations":{"id":"limitations","title":"Known Issues and Limitations","description":"AWS Regions & Credentials Limits","sidebar":"version-0.21.0/docs"},"providers/aws/authentication":{"id":"providers/aws/authentication","title":"Authentication","description":"To use driftctl, we need credentials to make authenticated requests to AWS. Just like the AWS CLI, we use credentials and configuration settings declared as user environment variables, or in local AWS configuration files.","sidebar":"version-0.21.0/docs"},"providers/aws/resources":{"id":"providers/aws/resources","title":"Supported Resources","description":"|resource type|deep mode available|","sidebar":"version-0.21.0/docs"},"providers/azure/authentication":{"id":"providers/azure/authentication","title":"Authentication","description":"To use driftctl, we need credentials to make authenticated requests to your Azure account.","sidebar":"version-0.21.0/docs"},"providers/azure/resources":{"id":"providers/azure/resources","title":"Supported Resources","description":"|resource type|deep mode available|","sidebar":"version-0.21.0/docs"},"providers/github/authentication":{"id":"providers/github/authentication","title":"Authentication","description":"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from environment variables.","sidebar":"version-0.21.0/docs"},"providers/github/resources":{"id":"providers/github/resources","title":"Supported Resources","description":"|resource type|deep mode available|","sidebar":"version-0.21.0/docs"},"providers/google/authentication":{"id":"providers/google/authentication","title":"Authentication","description":"To use driftctl, we need credentials to make authenticated requests to your GCP project.","sidebar":"version-0.21.0/docs"},"providers/google/resources":{"id":"providers/google/resources","title":"Supported Resources","description":"|resource type|deep mode available|","sidebar":"version-0.21.0/docs"},"usage":{"id":"usage","title":"Usage","description":"Be sure to have configured your AWS credentials.","sidebar":"version-0.21.0/docs"},"usage/cmd/completion-usage":{"id":"usage/cmd/completion-usage","title":"Completion","description":"driftctl can output completion script (also known as tab completion) for you to use on your shell. Currently bash, zsh, fish and powershell shells are supported.","sidebar":"version-0.21.0/docs"},"usage/cmd/gen-driftignore-usage":{"id":"usage/cmd/gen-driftignore-usage","title":".driftignore generator","description":"Some people do not have the goal of reaching a 100% IAC coverage with their infrastructure. And for them, driftctl can be annoying to continuously deliver drift notifications on resources they don\'t care. For this use case, there\'s a solution.","sidebar":"version-0.21.0/docs"},"usage/cmd/scan-usage":{"id":"usage/cmd/scan-usage","title":"Scan","description":"Description","sidebar":"version-0.21.0/docs"},"usage/filtering/driftignore":{"id":"usage/filtering/driftignore","title":".driftignore","description":".driftignore is a simple way to ignore resources, you put resources in a .driftignore file like a .gitignore.","sidebar":"version-0.21.0/docs"},"usage/filtering/rules":{"id":"usage/filtering/rules","title":"Filter Rules","description":"Filter rules can be used not only to scan resources, but also to ignore resources.","sidebar":"version-0.21.0/docs"},"usage/flags/crash-reporting":{"id":"usage/flags/crash-reporting","title":"Crash Reporting","description":"When a crash occurs in driftctl, we do not send any crash reports.","sidebar":"version-0.21.0/docs"},"usage/flags/disable-telemetry":{"id":"usage/flags/disable-telemetry","title":"Disable telemetry","description":"By default, driftctl sends telemetry data to help us improve the product.","sidebar":"version-0.21.0/docs"},"usage/flags/version-check":{"id":"usage/flags/version-check","title":"Version Check","description":"By default, driftctl checks for a new version remotely. The request to the remote server might send the following data about your computer:","sidebar":"version-0.21.0/docs"},"usage/log-level":{"id":"usage/log-level","title":"Log level","description":"By default driftctl logger only displays warning and error messages. You can set LOG_LEVEL environment variable to change the default level.","sidebar":"version-0.21.0/docs"}}}')}}]);