import {defineStore} from "pinia";

const useUserStore = defineStore({
  id: `user`,
  state: () => ({
    info: {
      selectedBranchOffice: null,
      currentUser: null,
      permissions: []
    },
  }),
  actions: {
    async initSession() {
      if (localStorage.getItem("branchOfficeId"))
        this.info.selectedBranchOffice = localStorage.getItem(
          "branchOfficeId"
        );

      if (localStorage.getItem("currentUser"))
        this.info.currentUser = JSON.parse(localStorage.getItem(
          "currentUser"
        ));
      // if (localStorage.getItem("session"))
      //   this.info = await http.get("/user").then((res) => res.data);
    },
    changeBranchOffice(idKey) {
      this.info.selectedBranchOffice = idKey;
      localStorage.setItem("branchOfficeId", idKey);
    },
    setPermissions(claims) {
      this.info.permissions = claims;
    },
    hasPermission(action) {
      return true;
      
      let res = this.info.permissions.some(
        (permission) => 
          permission.claimType === action && 
          permission.isActive === true 
      );

      return res;
    },
    reset() {
      this.info = {};
    },
  },
});

export default useUserStore;
