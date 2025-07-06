<template>
  <div class="section" id="contact">
    <div class="cc-contact-information" style="background-image: url('images/staticmap.png')">
      <div class="container">
        <div class="cc-contact">
          <div class="row">
            <div class="col-md-9">
              <div class="card mb-0" data-aos="zoom-in">
                <div class="h4 text-center title">¡CONTACT ME!</div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card-body">
                      <div class="p pb-3"><strong>Send me a message</strong></div>
                      <div class="row mb-3">
                        <div class="col">
                          <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user-circle"></i></span>
                            <input
                              class="form-control"
                              type="text"
                              name="name"
                              maxlength="25"
                              v-model="remitentName"
                              placeholder="Name"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col">
                          <div class="input-group">
                            <span class="input-group-addon"
                              ><i class="fa fa-solid fa-phone"></i
                            ></span>
                            <input
                              class="form-control"
                              type="text"
                              v-model="cellPhone"
                              maxlength="10"
                              @input="ValidatePhone"
                              name="CellPhone"
                              placeholder="Cellphone"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col">
                          <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                            <input
                              class="form-control"
                              type="email"
                              v-model="Email"
                              name="_replyto"
                              placeholder="Email"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              v-model="Message"
                              name="message"
                              placeholder="Your Message"
                              required="required"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <button class="btn btn-primary" @click="SendMail">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="mb-0"><strong>Address: </strong></p>
                      <p class="pb-2">Valle Alto, Culiacán, Sinaloa</p>
                      <p class="mb-0"><strong>Phone:</strong></p>
                      <p class="pb-2">+52 6673505397</p>
                      <p class="mb-0"><strong>Email:</strong></p>
                      <p>spabloulises@hotmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emailService from '@/services/emailService'
import { notifyLite } from '@/Libs'
import showSnackbar from '@/components/snackBar.js'
const notifier = ref('')

const cellPhone = ref('')
const Email = ref('')
const remitentName = ref('')
const Message = ref('')

//FUNCTIONS
const ValidatePhone = (event) => {
  const cleaned = event.target.value.replace(/\D/g, '')

  if (cleaned !== cellPhone.value) {
    cellPhone.value = cleaned
  }

  console.log('Validado:', cellPhone.value)
}

const SendMail = async () => {
  const json = {
    remitente: remitentName.value,
    email: Email.value,
    cellPhone: cellPhone.value,
    message: Message.value,
  }
  try {
    const response = await emailService(false).Send(json)
    if (response.status == 200) {
      remitentName.value = ''
      Email.value = ''
      cellPhone.value = ''
      Message.value = ''

      showSnackbar({ message: 'Enviado correctamente', type: 'success' })
    }
  } catch {
    showSnackbar({ message: 'No se pudo enviar el correo, intente de nuevo', type: 'error' })
  }
}

onMounted(async () => {
  notifier.value = notifyLite()
})
</script>
<style></style>
