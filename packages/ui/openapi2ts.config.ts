const config = [
  {
    requestLibPath: "import request from '@workspace/ui/lib/request';",
    schemaPath:
      "https://raw.githubusercontent.com/perfect-panel/ppanel-docs/refs/heads/main/public/swagger/common.json",
    serversPath: "./src/services",
    projectName: "common",
  },
  {
    requestLibPath: "import request from '@workspace/ui/lib/request';",
    schemaPath:
      "https://raw.githubusercontent.com/perfect-panel/ppanel-docs/refs/heads/main/public/swagger/user.json",
    serversPath: "./src/services",
    projectName: "user",
  },
  {
    requestLibPath: "import request from '@workspace/ui/lib/request';",
    schemaPath:
      "https://raw.githubusercontent.com/perfect-panel/ppanel-docs/refs/heads/main/public/swagger/admin.json",
    serversPath: "./src/services",
    projectName: "admin",
  },
];

export default config;
